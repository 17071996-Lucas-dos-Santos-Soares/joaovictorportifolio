<?php
$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$celular = addslashes($_POST['telefone']);
$mensagem = addslashes($_POST['txt-area']);
$para = "lucasstarttech@gmail.com";
$assunto = "coleta de dados";
$corpoemail = "Nome: ".$nome."\n"."Email: ".$email"\n"."Celular: ".$celular."\n"."Mensagem: "."\n"."Para: ".$para."\n"."Assunto: ".$assunto;
$cabeca = "From: lucasstarttech@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

if(mail($para,$assunto,$corpoemail,$cabeca)) {
    echo("E-mail enviado com sucesso!");
}
else {
    echo("Houve um erro ao enivar o email");
}
?>