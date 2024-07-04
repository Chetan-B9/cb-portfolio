import { useState } from "react";
import { useForm } from "react-hook-form";
import { message } from "antd";

import { Databases, Storage, ID } from "appwrite";
import client from "../../lib/appwrite";
import { Conf } from "../../Conf/conf";

import { LoadingOutlined } from "@ant-design/icons";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { Spin } from "antd";

// const uploadImages = (source) => {

// }

function Add() {
  const storage = new Storage(client);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [checkedItems, setCheckedItems] = useState([]);
  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState([]);
  const [showLoad, setShowLoad] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const technologies = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "React JS",
    "Bootstrap",
    "Tailwind CSS",
    "PHP",
    "Next.Js",
    "Node.JS",
    "Express.JS",
    "MySQL",
    "MongoDB",
  ];
  const submit = async (data) => {
    let res = [];

    setShowLoad(true);
    // console.log(data.screenshots);

    // console.log({...data, features: data.features.split(',')});

    const storagePromise = await storage.createFile(
      Conf.appWriteThumbnailsBucketId,
      ID.unique(),
      document.getElementById("uploader").files[0]
    );

    if (document.getElementById("screenshots").files.length > 0) {
      const screenshotUploadPromises = [
        ...document.getElementById("screenshots").files,
      ].map((screenshot) => {
        return storage.createFile(
          Conf.appWriteScreenshotsBucketId,
          ID.unique(),
          screenshot
        );
      });

      const screenshotResponses = await Promise.all(screenshotUploadPromises);
      res = screenshotResponses.map((response) => response.$id);
    }

    const databases = new Databases(client);

    const dbPromise = databases.createDocument(
      Conf.appWriteDatabaseId,
      Conf.apoWriteCollectionId,
      ID.unique(),
      {
        project_id: ID.unique(),
        project_name: data.projectName,
        description: data.description,
        features: features,
        technologies: checkedItems,
        github_link: data.gitHub,
        live_link: data.liveLink,
        thumbnail_id: storagePromise.$id,
        screenshots: res,
        upload_date_time: Date.now()
      }
    );

    dbPromise.then(
      () => {
        setShowLoad(false);
        successMessage("Project Uploaded!");
      },
      () => errorMessage("Project is not uploaded!")
    );

    //  setScreenshotIds([])
    setFeatures([])
  };

  const handleFeatureInput = (e) => {
     setFeature(e.target.value)
  }

  const addFeature = (e) => {
    e.preventDefault()
    setFeatures((prev) => [...prev, feature])
  }

  const removeFeature = (e, featureIndex) => {
    e.preventDefault();
        setFeatures(features.filter((feature, index) => featureIndex !== index));
  }

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setCheckedItems((prevState) => {
      if (checked) {
        return [...prevState, value];
      } else {
        return prevState.filter((item) => item !== value);
      }
    });
  };

  function successMessage(message) {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: message,
        duration: 2,
      });
    }, 1000);
  }

  function errorMessage(message) {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "error",
        content: message,
        duration: 2,
      });
    }, 1000);
  }

  return (
    <>
      {contextHolder}
      <div className="container mt-16">
        <div className="text-center text-2xl font-bold">
          <h2>
            <span className="text-main">Add</span> Projects
          </h2>
        </div>

        <div className="flex justify-center mt-5">
          <form
            className=" p-10 flex flex-col gap-5 rounded-md w-1/3 bg-secondary-bg"
            onSubmit={handleSubmit(submit)}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="pName" className="text-msm text-main">
                Project Name <span className="text-primary-text">*</span>
              </label>
              <input
                type="text"
                id="pName"
                {...register("projectName", {
                  required: "Project Name is Required",
                })}
                className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0"
                placeholder="Eg: Personal Portfolio website"
              />
              <p className="text-msm text-red-600">
                {errors.projectName?.message}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">
                Description <span className="text-primary-text">*</span>
              </label>
              <textarea
                {...register("description", {
                  required: "Project description is required",
                })}
                className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0 h-[7rem]"
                placeholder="Eg: This personal portfolio project showcases my web development skills by creating a responsive and visually appealing website...."
              />
              <p className="text-msm text-red-600">
                {errors.description?.message}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">
                Features
              </label>
              <div className="flex gap-2">
              <input
                type="text"
                value={feature}
                // {...register("features")}
                className="p-4 bg-primary-bg rounded-md text-msm w-[90%] focus:border-main focus:outline-0"
                placeholder="Eg: Provide user friendly interface, etc... (Note: seperate features with (,) symbol)"
                onChange={handleFeatureInput}
              />

              <button onClick={addFeature} className="w-[10%] bg-main rounded-md flex justify-center items-center text-2xl font-bold text-secondary-bg"><IoMdAdd /></button>
              </div>

              <div>
                {
                  features.length > 0 &&
                  <ul className="flex flex-wrap gap-3 mt-2">
                    {
                      features.map((feature, index) => {
                    return (
                      <li key={index} className="flex text-msm gap-2 w-fit rounded-2xl px-3 py-2 bg-primary-bg">
                        <p className="text-[.7rem]">{feature.length > 6 ? feature.slice(0,8) + "..." : feature}</p>
                        <button className="text-lg hover:text-main" onClick={(e) => removeFeature(e, index)}><IoMdClose /></button>
                      </li>
                    )
                  })
                  
                    }
                  </ul>
                  
                
                }
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">
                Used Techs
              </label>
              <ul
                id=""
                className="p-4 bg-primary-bg rounded-md text-msm h-[7rem] flex flex-col gap-1 overflow-y-auto focus:border-main focus:outline-0"
              >
                {technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={tech}
                      onChange={handleCheckboxChange}
                    />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">
                GitHub Repo link
              </label>
              <input
                type="url"
                {...register("gitHub")}
                className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0"
                placeholder="Eg: www.github.com/user-name"
              />
              {/* <p className="text-msm text-red-600">{errors.gitHub?.message}</p> */}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">
                Live link
              </label>
              <input
                type="url"
                {...register("liveLink")}
                className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0"
                placeholder="Eg: https://www.example.com"
              />
              {/* <p className="text-msm text-red-600">
                {errors.liveLink?.message}
              </p> */}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">
                Thumbnail <span className="text-primary-text">*</span>
              </label>
              <input
                type="file"
                {...register("thumbnail", {
                  required: "Thumbnail image is required",
                })}
                accept="image/png, image/jpg, image/jpeg, image/webp"
                className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0"
                id="uploader"
              />
              <p className="text-msm text-red-600">
                {errors.thumbnail?.message}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">
                Screenshots
              </label>
              <input
                type="file"
                {...register("screenshots")}
                multiple
                accept="image/png, image/jpg, image/jpeg, image/webp"
                className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0"
                id="screenshots"
              />
            </div>

            <div className="">
              <button
                type="submit"
                className="bg-main flex gap-3 justify-center w-full p-3 rounded-md text-black font-semibold"
              >
                <span className={`${showLoad ? "hidden" : "block"}`}>
                  Upload
                </span>
                <Spin
                  className={`${showLoad ? "block" : "hidden"}`}
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 22,
                        color: "black",
                      }}
                      spin
                    />
                  }
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
