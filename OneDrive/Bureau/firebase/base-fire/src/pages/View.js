import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { onValue, ref } from 'firebase/database';
import { fireDb } from '../firebase';
import { Link } from 'react-router-dom';

const View = () => {

    const [utilisateur, setUtilisateur] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const contactSelectionne = ref(fireDb, `contacts/${id}`)
        onValue(contactSelectionne, (resultat) => {
            if (resultat.exists()) {
                setUtilisateur({ ...resultat.val() })
            } else {
                setUtilisateur({})
            }
        })
    }, [id])

    return (
        <div>
            <form >
                <div class="mb-3">
                    <label for="name" class="form-label">Nom</label>
                    <input type="text" name='name' class="form-control" id="name" aria-describedby="emailHelp" value={utilisateur.name} readOnly/>

                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" name='email' class="form-control" id="email" aria-describedby="emailHelp" value={utilisateur.email} readOnly/>

                </div>

                <div class="mb-3">
                    <label for="contact" class="form-label">Numéro</label>
                    <input type="number" name='contact' class="form-control" id="contact" aria-describedby="emailHelp" value={utilisateur.contact} readOnly/>

                </div>

                    <br/>
                    <br/> 
                    <Link to="/">
                    <button type="button" class="btn btn-primary">Retour</button>
                    </Link>

            </form>
        </div>
    );
};

export default View;