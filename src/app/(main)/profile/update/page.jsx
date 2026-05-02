"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { authClient } from "../../../../lib/auth-client";
import { toast } from "react-toastify";

const ProfileUpdatePage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = async () => {
    const { error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Profile updated!");
    router.push("/profile");
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-md">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Update Information</h2>

          <label className="form-control w-full">
            <span className="label-text mb-1">New Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="form-control w-full mt-4">
            <span className="label-text mb-1">Image URL</span>
            <input
              type="text"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <button
            onClick={handleUpdate}
            className="btn btn-outline w-full mt-6"
          >
            Update Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
