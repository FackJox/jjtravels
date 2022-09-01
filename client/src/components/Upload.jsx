import React, { useEffect, useState } from 'react';


const Upload = () => {
  const [selectedPhotos, setSelectedPhotos] = useState()
  const [preview, setPreview] = useState()

  useEffect(() => {
    if (!selectedPhotos) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedPhotos)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedPhotos])

const onSelectPhoto = e => {
  if (!e.target.files || e.target.files.length === 0) {
    setSelectedPhotos(undefined)
    return
  }

  //change to display one image or plenty here, currently first file displayed
  setSelectedPhotos(e.target.files[0])
}


function submitPhoto(event) {

    event.preventDefault();

    const files = document.querySelector("[type=file]").files;
    const formData = new FormData();


    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      
      formData.append("file", file);
      formData.append("upload_preset", "stkv5cah");
      formData.append("cloud_name", "jandjtravels");
      formData.append("tags", ["test","trial","error"]);
      formData.append("context", "lng=4124124|lat=1241241");

      fetch("https://api.cloudinary.com/v1_1/jandjtravels/image/upload", {
        method: "POST",
        body: formData
      })
        .then((response) => {
          return response.text();
        })
        // .then((data) => {
        //   document.getElementById("data").innerHTML += data;
        // })
        ;
    }

  };


  return (
    <>
      <div>
        {selectedPhotos && <img src={preview} /> }
        <form method="post" encType="multipart/form-data" onSubmit={submitPhoto}>
          <input type="file" name="files[]" multiple  onChange={onSelectPhoto}/>
          <input type="submit" value="Upload Files" name="submit" />
        </form>
      </div>
      <div>
        <p id="data"></p>

      </div>
    </>
  );
}

export default Upload;