import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';
const Inscription = () => {
    const [erreur, setErreur]=useState();
    const [email, setEmail]=useState();
    const [password, setpassword] =useState();
    const navigate = useNavigate();
    const soumettre = (e) => {
        e.preventDefault();
        

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            navigate("/accueil");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

  return (
    <div>
      <div className='container pt-5'>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Adresse E-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                 <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={(e)=>setpassword(e.target.value)} /> 
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" name='retenir'/>
                <label class="form-check-label" for="exampleCheck1">Je suis d'accord avec les termes de service</label>
            </div>
            <button type="submit" class="btn btn-primary">Inscription</button>
            <a> Se connecter </a>
        </form>
      </div>
    </div>
  )
}

export default Inscription