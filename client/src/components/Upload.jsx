import React from 'react';


const Upload = () => {

function photosSelected() {
  const files = document.querySelector("[type=file]").files;
  console.log(files)
}

function submitFiles(event) {

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
        <form method="post" encType="multipart/form-data" onSubmit={submitFiles}>
          <input type="file" name="files[]" multiple  onChange={photosSelected}/>
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