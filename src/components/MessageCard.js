import "../style.css";


export default function MessageCard ({name, showModal, setShowModal}) {
  function closeModal () {
    setShowModal(false);
  }

  if(showModal){

    return (
      <>
        <div id="exampleModalLive" className="modal fade show" tabindex="-1" 
          role="dialog" aria-labelledby="exampleModalLiveLabel">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">We've received your feedback!</h1>
                <button type="button" className="btn-close" onClick={() => closeModal()}></button>
              </div>
              <div className="modal-body">
                Dear {name}, thank you for sharing with us!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary"  onClick={() => closeModal()}>Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-backdrop fade show"></div>
      </>)
  } else {
    return (<>
    </>)
  }
}