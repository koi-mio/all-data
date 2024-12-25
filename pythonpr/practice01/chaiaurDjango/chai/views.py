from django.shortcuts import render, get_list_or_404
from .models import ChaiVariety
from .forms import ChaiVerityFrom


def all_chai(request):
    chais = ChaiVariety.objects.all()
    return render(request, "chai/all_chai.html", {"chais": chais})


def chai_detail(request, chai_id):
    chai = get_list_or_404(ChaiVariety, pk=chai_id)
    return render(request, "chai/chai_detail.html", {"chai": chai})


def chai_store_view(request):
    stores = None
    if request.method == "POST":
        form = ChaiVerityFrom(request.POST)
        if form.is_valid():
            chai_variety = form.cleaned_data["chai_variety"]
            stores = Store.objects.filter(chaivarieties=chai_variety)
    else:
        form = ChaiVerityFrom()
    return render(request, "chai/chai_stores.html", {"stores": stores}, {"form": form})
