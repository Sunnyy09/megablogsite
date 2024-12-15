import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import dbService from "../appwrite/databaseConf";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate;

  useEffect(() => {
    if (slug) {
      dbService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
