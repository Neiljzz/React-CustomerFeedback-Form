import {useState} from 'react';

export default function ContactForm({submitData}) {
  const [isChecked, setIsChecked] = useState(true);

  function handleOnChange(e){
    setIsChecked(!isChecked);
  }

  function handleClick(e){
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const comment = e.target.comment.value;
    
    let formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      comment: comment,
      checked: isChecked
    }

    submitData(formData);
    // reset 
    e.target.firstName.value = "";
    e.target.lastName.value = "";
    e.target.email.value = "";
    e.target.comment.value = "";
    setIsChecked(true);
  }

  return (
    <div className="card mb-3 w-50 mx-auto">
       <div className="position-relative">
          <img src="bg1.jpeg" className="card-img-top img-fluid" alt="Card image" />
          <div className="overlay-text">
            <h2 className="card-text text-center mb-3">How was your experience with us?</h2>
          </div>
        </div>

      <form className="form mx-auto" action="" onSubmit={handleClick}>
        <div className='row mb-3 mt-3'>
          <div className="col-sm-6">
            <label className="form-label fw-bold">First Name
              <span className="text-danger">*</span>
            </label>
            <input type="text" name='firstName' className="form-control" required/>
          </div>
          <div className="col-sm-6">
            <label className="form-label fw-bold">Last Name
              <span className="text-danger">*</span>
            </label>
            <input type="text" name='lastName' className="form-control" required/>
          </div>
        </div>
        
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label fw-bold">Email address
            <span className="text-danger">*</span></label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <div className="mb-3">
          <p className='fw-bold mb-2'> How would you rate the quality of our product/service? </p>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
              <label className="form-check-label" htmlFor="exampleRadios1">
                  Loved it!
              </label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" htmlFor="exampleRadios2">
                  Pretty good
              </label>
          </div>
          <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
              <label className="form-check-label" htmlFor="exampleRadios3">
                  Just OK
              </label>
          </div>
          <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
              <label className="form-check-label" htmlFor="exampleRadios3">
                  Not great
              </label>
          </div>
          <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
              <label className="form-check-label" htmlFor="exampleRadios3">
                  Didn't like it at all
              </label>
          </div>
        </div>

        <div className="mb-3">
          <p className='fw-bold mb-2 mt-3'> Did our product/service meet your expectations? </p>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
              <label className="form-check-label" htmlFor="exampleRadios1">
                  Exceeded expectations
              </label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" htmlFor="exampleRadios2">
                  Met expectations
              </label>
          </div>
          <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
              <label className="form-check-label" htmlFor="exampleRadios3">
                  Did not meet expectations
              </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">What do you like most about our product/service?
            <span className="text-danger"></span></label>
          <textarea className="form-control" name="comment" rows="3" placeholder='Enter your answer here...' />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">What changes would you recommend to improve our product/service?
            <span className="text-danger"></span></label>
          <textarea className="form-control" name="comment" rows="3" placeholder='Enter your answer here...' />
        </div>

        <div className="mb-3">
          <p className='fw-bold'> How would you rate your overall experience? </p>
          <div className='row'>
            <div className='col-12 d-flex justify-content-between flex-wrap'>
              <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label" htmlFor="inlineRadio1">Excellent</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label" htmlFor="inlineRadio2">Good</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                  <label className="form-check-label" htmlFor="inlineRadio3">Fair</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                  <label className="form-check-label" htmlFor="inlineRadio4">Poor</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                  <label className="form-check-label" htmlFor="inlineRadio5">Terrible</label>
                </div>
              </div>
            </div>
          </div>
          
        <div className="form-check mt-3">
          <input className="form-check-input" type="checkbox" value="" checked={isChecked} onChange={handleOnChange}/>
          <label className="form-check-label" for="flexCheckChecked">
            I agree to receive marketing emails and special offers.
          </label>
        </div>
        <div className='text-center'>
          <input type="submit" value="Submit" className='btn btn-primary mt-3 mb-3' />
        </div>
      </form>
    </div>

  )
}
