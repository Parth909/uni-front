import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

const Dropzone = ({
  fileInputRef,
  modalImageRef,
  modalRef,
  progressRef,
  uploadRef,
  uploadModalRef,
  selectedFiles,
  setSelectedFiles,
  validFiles,
  setValidFiles,
  unsupportedFiles,
  setUnsupportedFiles,
  errorMessage,
  setErrorMessage,
}) => {
  /*  const fileInputRef = useRef();
  const modalImageRef = useRef();
  const modalRef = useRef();
  const progressRef = useRef();
  const uploadRef = useRef();
  const uploadModalRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [validFiles, setValidFiles] = useState([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
*/
  useEffect(() => {
    // simply setting the validFiles state
    let filteredArr = selectedFiles.reduce((acc, current) => {
      const x = acc.find((item) => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    // valid files also contain everything - used to map around & display data
    setValidFiles([...filteredArr]);
  }, [selectedFiles]);

  React.useEffect(() => {
    console.log("validfiles", validFiles);
  }, [validFiles]);

  const preventDefault = (e) => {
    e.preventDefault();
    // e.stopPropagation();
  };

  const dragOver = (e) => {
    preventDefault(e);
  };

  const dragEnter = (e) => {
    preventDefault(e);
  };

  const dragLeave = (e) => {
    preventDefault(e);
  };

  const fileDrop = (e) => {
    preventDefault(e);
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      } else {
        // adding invalid property inside the file obj
        files[i]["invalid"] = true;
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        setErrorMessage("File type not permitted");
        setUnsupportedFiles((prevArray) => [...prevArray, files[i]]);
      }
    }
  };

  const validateFile = (file) => {
    console.log(file);
    // const validTypes = [
    //   "image/jpeg",
    //   "image/jpg",
    //   "image/png",
    //   "image/gif",
    //   "image/x-icon",
    // ];
    const validTypes = ["video/mp4", "video/webm", "video/ogg"];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }

    return true;
  };

  const fileSize = (bytes) => {
    // new
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
      fileName
    );
  };

  const removeFile = (name) => {
    const index = validFiles.findIndex((e) => e.name === name);
    const index2 = selectedFiles.findIndex((e) => e.name === name);
    const index3 = unsupportedFiles.findIndex((e) => e.name === name);
    validFiles.splice(index, 1);
    selectedFiles.splice(index2, 1);
    setValidFiles([...validFiles]);
    setSelectedFiles([...selectedFiles]);
    if (index3 !== -1) {
      // if "file to be removed" present in "unsupported files" remove it from "unsupported files"
      unsupportedFiles.splice(index3, 1);
      setUnsupportedFiles([...unsupportedFiles]);
    }
  };

  const openImageModal = (file) => {
    const reader = new FileReader();
    modalRef.current.style.display = "block";
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
    };
  };

  const closeModal = () => {
    modalRef.current.style.display = "none";
    modalImageRef.current.style.backgroundImage = "none";
  };

  // to be modified
  const uploadFiles = async () => {
    uploadModalRef.current.style.display = "block";
    uploadRef.current.innerHTML = "File(s) Uploading...";
    for (let i = 0; i < validFiles.length; i++) {
      const formData = new FormData();
      formData.append("image", validFiles[i]);
      formData.append("key", "");

      axios
        .post("https://api.imgbb.com/1/upload", formData, {
          onUploadProgress: (progressEvent) => {
            const uploadPercentage = Math.floor(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            progressRef.current.innerHTML = `${uploadPercentage}%`;
            progressRef.current.style.width = `${uploadPercentage}%`;

            if (uploadPercentage === 100) {
              uploadRef.current.innerHTML = "File(s) Uploaded";
              validFiles.length = 0;
              setValidFiles([...validFiles]);
              setSelectedFiles([...validFiles]);
              setUnsupportedFiles([...validFiles]);
            }
          },
        })
        .catch(() => {
          uploadRef.current.innerHTML = `<span class="error">Error Uploading File(s)</span>`;
          progressRef.current.style.backgroundColor = "red";
        });
    }
  };
  // to be modified end

  const closeUploadModal = () => {
    uploadModalRef.current.style.display = "none";
  };

  return (
    <>
      <div className="container-fluid dropzone-container">
        {unsupportedFiles.length ? (
          <p className="rm-unsupported-vid">
            Please remove all unsupported files.
          </p>
        ) : (
          ""
        )}
        <div
          className="drop-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          onClick={fileInputClicked}
        >
          <div className="drop-message">
            <div className="upload-icon"></div>
            Drag & Drop files here or click here to select file(s)
          </div>
          <input
            ref={fileInputRef}
            className="file-input"
            type="file"
            multiple
            onChange={filesSelected}
          />
        </div>
        <div>
          {validFiles.map((data, i) => (
            <div key={i}>
              <div className="file-status-bar">
                <div
                  // onClick={
                  //   !data.invalid
                  //     ? () => openImageModal(data)
                  //     : () => removeFile(data.name)
                  // }
                  onClick={
                    data.invalid
                      ? (e) => removeFile(data.name)
                      : (e) => preventDefault(e)
                  }
                >
                  {/* <div className="file-type-logo"></div> */}

                  <span
                    className={`file-name ${data.invalid ? "file-error" : ""}`}
                  >
                    <span className="file-type">{fileType(data.name)}</span>
                    {data.name}
                    <span className="file-size">
                      ({fileSize(data.size)})
                    </span>{" "}
                    {data.invalid && (
                      <span className="file-error-message">
                        ({errorMessage})
                      </span>
                    )}
                  </span>
                </div>
                <div
                  className="file-remove"
                  onClick={() => removeFile(data.name)}
                >
                  X
                </div>
              </div>
            </div>
          ))}
        </div>
        {unsupportedFiles.length === 0 && validFiles.length ? (
          <div className="text-center">
            <button
              className="btn btn-lg upload-video-btn"
              onClick={() => uploadFiles()}
            >
              Upload Video
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="tatti-modal" ref={modalRef}>
        <div className="overlay"></div>
        <span className="close" onClick={() => closeModal()}>
          X
        </span>
        <div className="modal-image" ref={modalImageRef}></div>
      </div>

      <div className="upload-modal" ref={uploadModalRef}>
        <div className="overlay"></div>
        <div className="close" onClick={() => closeUploadModal()}>
          X
        </div>
        <div className="progress-container">
          <span ref={uploadRef}></span>
          <div className="progress">
            <div className="progress-bar" ref={progressRef}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropzone;
