function CreateIdea() {
  return (
    <div className='mt-3'>
      <h1>Submit new idea</h1>
      <div class='form-group my-3'>
        <input class='form-control' placeholder='Title' />
      </div>
      <div class='form-group my-3'>
        <textarea class='form-control' rows='7'></textarea>
      </div>
      <div class='form-group'>
        <input type='file' class='form-control-file' id='exampleFormControlFile1' />
      </div>
      <div className='d-flex'>
        <button className='ms-auto btn my-3 btn-primary'>Submit</button>
      </div>
    </div>
  )
}

export default CreateIdea
