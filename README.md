Descripción:
-Se realizó un formulario de varios pasos el cual muestra la información ingresada por el usuario al final.
-Se aseguró la permanencia y actualización de datos mediante el uso de useState
-En el caso de los checkboxes, se utilizó de nuevo el useState para determinar qué casillas estaban marcadas y en base
a esto saber si mostrar o no el servicio asociado.
Desarrollo:
-Descargar el proyecto mediante GitHub
-Dirigirse al directorio del proyecto mediante la consola
-Correr el comando "npm install" para descargar las dependencias necesarias
Despliegue en AWS:
-Correr el comando "npm run build" en el directorio del proyecto. Esto creará una carpeta build.
-En AWS, crear un bucket S3
	-En la opción "propiedad del objeto" marcar ACL habilitadas
	-En "propiedad del objeto" seleccionar la opción "escritor de objetos"
	-Permitir todo el acceso público
	-Crear el bucket
-En el bucket creado previamente, dirigirse a la pestaña "Permisos"
-En política del bucket hacer click en editar
-Copiar el siguiente código en la casilla:
{
 "Version": "2012-10-17",
 "Statement": [
     {
         "Effect": "Allow",
         "Principal": "*",
         "Action": [
             "s3:GetObject",
             "s3:PutObject"
         ],
         "Resource": [
             "arn:aws:s3:::<Your-Bucket-name>",
             "arn:aws:s3:::<Your-Bucket-name>/*"
         ]
     }
     ]
 } 
-Reemplazar <Your-Bucket-name> por el nombre del bucket
-Dirigirse a la pestaña propiedades
-En la opcíon de Alojamiento de sitios web estáticos, hacer click en editar
-Hacer click en habilitar
-En documento de índice escribir "index.html"
-Guardar los cambios
-Subir los archivos dentro de la carpeta build en el bucket (NO subir la carpeta build)
-Hacer click en upload
-El url del sitio web se encuentra en la pestaña propiedades, debajo de la opción alojamiento de sitios web estáticos