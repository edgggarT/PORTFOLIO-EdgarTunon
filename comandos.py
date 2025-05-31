#Comandos basicos de Linux para usar en la consola Bash

"""
cd <ruta>
cd.. (Retroceder)
mkdir <nomcarpeta>  (Crear carpeta/directorio)
touch <nomarch.formato> (Crear archivo)
history (Historial de comandos usados durante la sesion)
clear (Limpiar consola)
rm <nomarch.format>  (Borrar archivo)
pwd (indica la ruta en la que estamos)
ls (Muchos comandos distintos)
"""

# Comandos mas importates para el manejo de la consola Git Bash

"""
git init (inicializar git)
git config --global user.name "Nombre" (Registrar nombre)
git config --global user.email "email" (Registrar email)
git status (ver estado de los commit)
git add <nomarch> (git comenzara a registrar el archivo)
git add .  (Todos los archivos no track se trackearan)
git commit -am "Texto"   (Crear un commit)
git log (Ver historial de commits)
git checkout <id del commit>  (Volver a un commit)
git checkout master (volver a la rama principal)
git log --stat
git log --all
git log --all --graph
git log --decorate --oneline
git branch <nombre>
git merge <ramaSecundaria>  (para unir el brach, siempre cambiar a la rama master antes)
git reset --soft HEAD~1 (borrar ultimo commit)
git config --global alias.nombre "<comando>"  (permite ejecutar comandos pero mas corto)
git reset --hard <id de commit>  (permite mover el master hacia ese commit, pero borra los unstaged)
git reset --soft <id de commit>  (permite mover el master hacia ese commit, mantiene los unstaged)
git checkout -b <nombre de la rama>  (crea y nos mueve a esa rama)
git rm --cached <nombreArchivo> (con esto podemos quitar un archivo del stage)
touch .gitignore (se crea un archivo que me permite ocultar archivos)
<<<<<<< Updated upstream
<<<<<<< Updated upstream
git stash   (guarda los cambios, menos los que no estan trackeados, de la rama en la que me encuentro en una memoria)
git stash pop   (todos los cambios que copiamos se pegan en la rama en la que estamos)
git stash drop  (borra el ultimo elemento copiado)
git stash clear (borra todos los elementos copiados)
=======
=======
>>>>>>> Stashed changes
git stage   (guarda los cambios, menos los que no estan trackeados, de la rama en la que me encuentro en una memoria)
git stage pop   (todos los cambios que copiamos se pegan en la rama en la que estamos)
git stage drop  (borra el ultimo elemento copiado)
git stage clear (borra todos los elementos copiados)
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

CONEXION CON GITHUB:

1. git remote add origin https://github.com/edgggarT/portfolio-EdgarTu-on.git (en cualquier rama) 
2. git branch -M main (Cambiamos de nombre la rama master a main)
3. git push -u origin main (Hay que posicionarse en la rama principal y llevarla a github)
4. git push origin <NombreRama>   (Esto te permite llevar todas las otras ramas hacia el directorio en github)

# pull & request (Agarrar una rama desactualizada y actualizarla usando otra rama con contenido actualizado)
5. git pull origin main (una vez realizamos el pull resquest entre dos ramas en github, traemos la rama actualizada de main para que remplace a la rama desactualizada)

USO DEL SSH

1. ssh-keygen -t rsa -b 4096 -C <email>
2. eval $(ssh-agent -s)
3. ssh-add ~/.ssh/id_rsa
# en github copiamos lo que se encuentra dentro del archivo id_rsa y creamos una key ssh
4. git remote set-utl origin <sshKey que esta dentro de github>


"""