angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){

  $scope.foto = {};
  $scope.mensagem = "";

  if($routeParams.fotoId){
    $http.get('v1/fotos/'+$routeParams.fotoId).success(function(foto){

      $scope.foto = foto;
    })
    .error(function(erro){

      console.log(erro);
      $scope.mensagem = "não foi possivel carregar foto";
    })
  }

  $scope.submeter = function(){

    if ($scope.formulario.$valid){

      if($scope.foto._id){

        $http.put('v1/fotos/'+$scope.foto._id, $scope.foto).success(function(){

          $scope.mensagem = "foto alterada com sucesso";
        })
        .error(function(erro){

          $scope.mensagem = "não foi possivel alterar a foto";
          console.log(erro);
        });
      }else{

        $http.post('v1/fotos', $scope.foto).success(function(){

          $scope.foto = {};
          $scope.mensagem = "foto cadastrada com sucesso";
        })
        .error(function(erro){

          $scope.mensagem = "foto não cadastrada";
          console.log(erro);
        });
      }
    }
  };
});
