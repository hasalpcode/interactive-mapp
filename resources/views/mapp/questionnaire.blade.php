<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


<div class="mx-0 mx-sm-auto">
  <div class="card">
    <div class="card-header bg-primary">
      <h5 class="card-title text-white mt-2" id="exampleModalLabel">Feedback request</h5>
    </div>
    <div class="modal-body">
      <div class="text-center">
        <i class="far fa-file-alt fa-4x mb-3 text-primary"></i>
        <p>
          <strong>Your opinion matters</strong>
        </p>
        <p>
          Have some ideas how to improve our product?
          <strong>Give us your feedback.</strong>
        </p>
      </div>

      <hr />

      <form class="px-4" action="">
      <div class="form-outline mb-4">
        <label class="form-label" for="form4Example3">Intitulé du programe</label>
          <input type="text" class="form-control" id="form4Example3" >
          
        </div>
        <p class="text-center"><strong>Your rating:</strong></p>

        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example1" />
          <label class="form-check-label" for="radio3Example1">
            Very good
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example2" />
          <label class="form-check-label" for="radio3Example2">
            Good
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example3" />
          <label class="form-check-label" for="radio3Example3">
            Medicore
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example4" />
          <label class="form-check-label" for="radio3Example4">
            Bad
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="exampleForm" id="radio3Example5" />
          <label class="form-check-label" for="radio3Example5">
            Very bad
          </label>
        </div>

        <p class="text-center"><strong>What could we improve?</strong></p>

        <!-- Message input -->
        <div class="form-outline mb-4">
          <textarea class="form-control" id="form4Example3" rows="4"></textarea>
          <label class="form-label" for="form4Example3">Your feedback</label>
        </div>
      </form>
    </div>
    <div class="card-footer text-end">
      <button type="button" class="btn btn-primary">Submit</button>
    </div>
  </div>
</div>