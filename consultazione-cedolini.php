<!DOCTYPE html>
<html>
<head>
  <title>AdminLTE 2 | Consultazione cedolini</title>
  <?php require 'pages/fragments/head.php';?>
</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

  <header class="main-header">
   <?php include 'pages/fragments/header.php'; ?>
  </header>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <?php include 'pages/fragments/aside.php'; ?>
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Consultazione cedolini
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Visualizzazione generale</a></li>
        <li class="active"><u>Consultazione cedolini</u></li>
      </ol>
    </section>
    <!-- Main content -->
    <section class="content"><?php require 'pages/fragments/modulo-consultazione-ced.php';?>   
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
     <?php include 'pages/fragments/footer.php'; ?>
  </footer>

  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>
</div>
<!-- ./wrapper -->
<?php require 'pages/fragments/script.php';?>

</body>
</html>
