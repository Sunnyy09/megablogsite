import { useState } from "react";
import contactService from "../../appwrite/contactService";
import { Button, Input } from "../index";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSending },
  } = useForm();

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   setErrors({ ...errors, [e.target.name]: "" });
  // };

  const onSubmit = async (data) => {
    try {
      await contactService.createMessage(data);
      alert("Message sent successfully");
      reset();
    } catch (error) {
      console.error("Error submitting message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="max-w-lg sm:mx-auto mx-4 my-12 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block ml-1 mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <Input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your name"
            {...register("name", { required: true, maxLength: 20 })}
          />
          {errors.name?.message && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block ml-1 mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email?.message && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block ml-1 mb-1 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your message..."
            rows={4}
            disabled={isSending}
            {...register("message", { required: true })}
          ></textarea>
          {errors.message?.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
