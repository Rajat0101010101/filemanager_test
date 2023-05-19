import React, { useState } from 'react';
import './filemanager.css'




function FileInput() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [deleteConfirmationIndex, setDeleteConfirmationIndex] = useState(null);



  function truncateString(text, limit) {
    if (text.length <= limit) {
      return text;
    } else {
      return text.substring(0, limit) + '...';
    }
  }


  function handleFileSelect(event) {
    const fileList = event.target.files;
    const fileArray = Array.from(fileList);
    setSelectedFiles(prevSelectedFiles => [...prevSelectedFiles, ...fileArray]);
  }


  function handleDelete(index) {
    setDeleteConfirmationIndex(index);
  }


  function handleConfirmDelete(index, confirmed) {
    if (confirmed) {
      setSelectedFiles(prevSelectedFiles =>
        prevSelectedFiles.filter((_, i) => i !== index)
      );
    }

    setDeleteConfirmationIndex(null);
  }


  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }


  return (
    <div>
      <div class="wrapper">
        <div class="box header">
          <img className='logo' src='logo.png'  alt=''/>
          <span className='stealthtext'>Stealth</span>
          <span className='filemanagertext'>File manager</span>
          <label htmlFor="file-input" className="file-label">
            <div className='uplodebutton'>
              + Uplode
            </div>
          </label>
        </div>
        <div class="box sidebar">
          <div className='ff'>
            <span className='filemanagertext2'>
              <img src='logo2.png' className='logo2'  alt=''/>
              Filemanager
            </span>
          </div>
        </div>
        <div>
          <div class="box content">
            <div className='yy'>
              <div className='container'>
                <div className='zz'>
                  All Items
                </div>
                {selectedFiles.length > 0 && (
                  <ul>
                    {selectedFiles.map((file, index) => (
                      <li key={index}>
                        <div className="flex-box">
                          <div className='ss'>
                            <strong>Name:</strong> <br></br>{truncateString(file.name, 6)}
                          </div>
                          <div>
                            <strong>Owner</strong> <br></br> <img className="imgf" alt='' src='face.png' />
                          </div>
                          <div>
                            <strong>Label</strong> <br></br>Label 1
                          </div>
                          <div>
                            <strong>Type</strong> <br></br>{file.type}
                          </div>
                          <div>
                            <strong>Modified</strong> <br></br>{formatTimestamp(file.lastModified)}
                          </div>
                          <div>
                            <strong>Action</strong><br></br>
                            {deleteConfirmationIndex === index ? (
                              <>
                                <span>Are you sure you want to delete?</span>
                                <button onClick={() => handleConfirmDelete(index, true)}>
                                  <span role="img" aria-label="Yes">
                                    &#10004;
                                  </span>
                                </button>
                                <button onClick={() => handleConfirmDelete(index, false)}>
                                  <span role="img" aria-label="No">
                                    &#10006;
                                  </span>
                                </button>
                              </>
                            ) : (
                              <a onClick={() => handleDelete(index)}><img className='imgd' src='delete.png' alt='' /></a>
                            )}
                          </div>
                        </div>
                        <hr></hr>
                        <div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        id="file-input"
        type="file"
        multiple
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default FileInput;
