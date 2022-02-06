import React, { useState, useRef } from "react";
import { MdOutlineLocalSee } from "react-icons/md";
import '../../css/upload.css'

const ProfileImage = () => {
    
    const inputRef = useRef();
    const [media, setMedia] = useState(null);
    const [mediaPreview, setMediaPreview] = useState(null);

    const handleChange = e => {
        const { name, value, files } = e.target;
    
        if (name === "media") {
          setMedia(files[0]);
          setMediaPreview(URL.createObjectURL(files[0]));
        }
      }; 
    return (
        <div>
            <div className="camera-containers">
                <div className="picture-con"><img src={mediaPreview} className='picture' alt=""/></div>
                 <input
                    ref={inputRef}
                    onChange={handleChange}
                    name="media"
                    style={{display:"none"}}
                    type="file"
                    accept="image/*"
                />
                <div className="camera" onClick={() => inputRef.current.click()}><MdOutlineLocalSee className="camera-icon"/> </div>
            </div>    
        </div>
    )
}

export default ProfileImage