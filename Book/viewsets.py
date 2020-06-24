from rest_framework import viewsets
from Book.models import Book
from Book.serializer import BookSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset=Book.objects.all()
    serializer_class=BookSerializer
