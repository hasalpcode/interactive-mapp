<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>



<div class="align-content-md-center col-md-8 align-center formadd "  style="text-align: center;margin:auto">

<div class="card text-left">
    <div class="card-header bg-primary text-light"><h2>Questionnaire</h2> </div>
<div class="card-body">
      <form class="px-8" method="POST" action="{{ route('store')}}">
      @csrf
        <div class="row">
          <div class="col">
          <div class="form-outline mb-4">
         <label class="form-label" for="">selectionnez un pays</label>
            <select name="pays" id="" class="form-control">
              <option value="">--pays--</option>
              @forelse($pays as $pays)

               <option value="{{$pays->code}}">{{$pays->nom_fr_fr}}</option>
              @empty
              @endforelse
            </select>
           </div>
          </div>
          <div class="col">
            <div class="form-outline mb-4">
        <label class="form-label" for="form4Example3">Intitulé du programe</label>
          <input type="text" class="form-control" id="form4Example3" name="programme" >
        </div>
          </div>
        </div>

        <div class="row">
        <div class="col">
          <div class="form-outline mb-4">
         <label class="form-label" for="">Répondants</label>
            <input type="text" class="form-control" placeholder="nom,organisation" name="repondant">
           </div>
        </div>
        <div class="col">
            <div class="form-outline mb-4">
        <label class="form-label" for="form4Example3">Date remplissage</label>
          <input type="text" class="form-control" id="form4Example3" name="date"  value="{{$datesys}}" readonly>
          </div>
        </div>
        </div>
      

  <table class="table  table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">Rubriques</th>
      <th scope="col">Questions</th>
    </tr>

  </thead>
  <tbody>
    <tr>
 
      <td>Nature</td>
      <td>
      <p class="text-center"><strong>Quelle est la nature spécifique de l&#39;intervention ?</strong></p>

        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="intervention" id="radio3Example1" value="CVA" />
          <label class="form-check-label" for="radio3Example1">
            CVA
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="intervention" id="radio3Example2" value="Incitation aux enseignants" />
          <label class="form-check-label" for="radio3Example2">
            Incitation aux enseignants
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="intervention" id="radio3Example3"value="Subvention monétaire aux écoles" />
          <label class="form-check-label" for="radio3Example3">
            Subvention monétaire aux écoles
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="intervention" id="radio3Example4" value="Autre"/>
          <label class="form-check-label" for="radio3Example4">
            Autre
          </label>
        </div>
 
      </td>
    </tr>

    <tr>
 
      <td>Couverture géographique</td>
      <td>
        <textarea name="q1" id="" cols="22" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Date de début / de fin</td>
      <td>
        <textarea name="q2" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Acteurs et parties prenantes</td>

      <td>
        <textarea name="q3" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Bénéficiaires ciblés</td>

      <td>
        <textarea name="q4" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Bénéfice</td>

      <td>
        <textarea name="q5" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Contexte</td>

      <td>
        <textarea name="q6" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Stratégie de mise en œuvre</td>

      <td>
        <textarea name="q7" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Influence/résultats</td>

      <td>
        <textarea name="q8" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Facteurs de réussite</td>

      <td>
        <textarea name="q9" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Contraintes</td>

      <td>
        <textarea name="q10" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Soutenabilité</td>

      <td>
        <textarea name="q11" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Réplicabilité <br> et passage
        à l&#39;échelle</td>

      <td>
        <textarea name="q12" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Témoignage</td>

      <td>
        <textarea name="q13" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Documentation <br>
        complémentaire</td>

      <td>
        <textarea name="q14" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>

    <tr>
 
      <td>Coordonnées du contact</td>

      <td>
        <textarea name="q15" id="" cols="2" rows="2" class=" form-control"> </textarea>
      </td>
    </tr>


  </tbody>
</table>

      <input type="submit" value="envoyer">
    
      </form>
    </div>
    
  </div>
</div>
         <a href="#" onclick="retour()" style="margin-left: 750px;">
            <button class="btn  btn-dark btnretour">Annuler</button>
            <script>
                function retour() {
                    history.back();
                }
            </script>
            </a>  
          </div>
        </div>
    
    <div>