//afficher si la réponse du premier choix multiple est vraie ou fausse.
function myFunction(choix_memoire) {
            document.getElementById("correction").value = choix_memoire;
        }

//afficher si la réponse du deuxième choix multiple est vraie ou fausse.
function myFunction2(choix_memoire2) {
            document.getElementById("correction2").value = choix_memoire2;
        }

//afficher si la réponse du troisième choix multiple est vraie ou fausse.
function myFunction3(choix_memoire3) {
            document.getElementById("correction3").value = choix_memoire3;
        }

//Effacer toutes les réponses de l'utilisateur en rafraîchissant la page.
function refreshPage(){
             window.location.reload();
        } 