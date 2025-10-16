from django.shortcuts import render, redirect
from .models import Project, Testimonial
from .forms import ContactForm
from django.contrib import messages

# Create your views here.
from django.http import HttpResponse

# def dashboard_home(request):
#     return HttpResponse("Welcome to the Dashboard!")

def dashboard_home(request):
    projects = Project.objects.all().order_by('-date_created')[:6]
    testimonials = Testimonial.objects.all().order_by('-date_added')[:3]
    contact_form = ContactForm()

    if request.method == 'POST':
        contact_form = ContactForm(request.POST)
        if contact_form.is_valid():
            contact_form.save()
            messages.success(request, "Thank you! Your message has been received.")
            return redirect('home')

    return render(request, 'index.html', {
        'projects': projects,
        'testimonials': testimonials,
        'contact_form': contact_form
    })
