from rest_framework import serializers
from .models import User  # Import your model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # Define the model to serialize
        fields = ['id', 'username', 'email', 'date_joined']  # Specify fields to include in the serialized output