angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams){

  $scope.foto = {};
  $scope.mensagem = "";

  if($routeParams.fotoId){
    recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto){

      $scope.foto = foto;
    }, function(erro){

      console.log(erro);
      $scope.mensagem = "não foi possivel recuperar foto";
    })
  }

  $scope.submeter = function(){

    if ($scope.formulario.$valid){

      if($scope.foto._id){

        recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function(){

          $scope.mensagem = "foto alterada com sucesso";
        }, function(erro){

          $scope.mensagem = "não foi possivel alterar a foto";
          console.log(erro);
        });

      }else{

        recursoFoto.save($scope.foto, function() {

          $scope.foto = {};
          $scope.mensagem = "foto cadastrada com sucesso";
        }, function(erro){

          $scope.mensagem = "foto não cadastrada";
          console.log(erro);
        });
      }
    }
  };
});
