from djoser.serializers import UserCreateSerializer
from users.models import CustomUser

class CustomUserSerializer(UserCreateSerializer):
    class Meta:
        model = CustomUser
        fields = ("id", "email", "name", "password")