from django.shortcuts import render
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Game
from .serializers import GameSerializer


class GameView(APIView):

    def post(self, request):
        data = request.data
        serializer = GameSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Game Added Successfully", safe=False)
        return JsonResponse("Failed to Add Game", safe=False)
    
    def get_game(self, pk):
        try:
            game = Game.objects.get(gameId = pk)
            return game
        except Game.DoesNotExist:
            raise Http404
        
    def get(self, request, pk=None):
        if pk:
            data = self.get_game(pk)
            serializer = GameSerializer(data)
        else:
            data = Game.objects.all()
            serializer = GameSerializer(data, many=True)
        return Response(serializer.data)
    
    def put(self, request, pk = None):
        game_to_update = Game.objects.get(gameId=pk)
        serializer = GameSerializer(instance=game_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Game updated Successfully", safe=False)
        return JsonResponse("Faile to Update Game")
    
    def delete(self, request, pk):
        game_to_delete = Game.objects.get(gameId = pk)
        game_to_delete.delete()
        return JsonResponse("Game Deleted Successfully", safe=False)