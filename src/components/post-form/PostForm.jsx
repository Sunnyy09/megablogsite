import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import dbService from "../../appwrite/databaseConf";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? dbService.uploadFile(data.image[0]) : null;

      if (file) {
        dbService.deleteFile(post.featuredImage);
      }
      const dbPost = await dbService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      //todo: check the file before upload
      const file = await dbService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await dbService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s] + /g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    //optimization for method in useEffect
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-6"
    >
      <div className="w-full lg:w-2/3 px-2 lg:space-y-0 space-y-4">
        <Input
          label="Title: "
          placeholder="Title"
          className="mb-2"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug: "
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content: "
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-full lg:w-1/3 px-2">
        <Input
          label="Featured Image: "
          type="file"
          className="mb-4"
          accep="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", {
            required: !post,
          })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              className="rounded-lg"
              src={dbService.getFilePreview(post.featuredImage)}
              alt={post.title}
            />
          </div>
        )}
        <Select
          className="mb-4"
          options={["Active", "Inactive"]}
          label="Status"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {" "}
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
