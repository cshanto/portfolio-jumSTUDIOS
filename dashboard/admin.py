from django.contrib import admin
from .models import Project, Testimonial, ContactMessage
admin.site.site_header = "AlphineSTUDIOS Admin"
admin.site.site_title = "AlphineSTUDIOS Dashboard"
admin.site.index_title = "Welcome to the Admin Panel"

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_created')
    search_fields = ('title',)
    ordering = ('-date_created',)

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'date_added')
    search_fields = ('name', 'role')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'date_sent')
    search_fields = ('name', 'email')
