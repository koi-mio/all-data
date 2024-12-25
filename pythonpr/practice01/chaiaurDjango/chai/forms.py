from django import forms
from .models import ChaiVariety


class ChaiVerityFrom(forms.Form):
    chai_variety = forms.ModelChoiceField(
        queryset=ChaiVariety.objects.all(), label="select Chai variety"
    )
