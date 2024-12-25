# from django.contrib import admin
# from .models import ChaiVariety, ChaiCertificate, ChaiFrencency, ChaiReview, Store


# class ChaiReviewInline(admin.TabularInline):
#     model = ChaiReview
#     extra = 2


# class ChaiVarietyAdmin(admin.ModelAdmin):
#     list_display = ("name", "type", "date_added")
#     inlines = [ChaiReviewInline]


# class StoreAdmin(admin.ModelAdmin):
#     list_display = ("name", "location", "city", "chaivarieties")
#     filter_horizontal = ("chai_verieties",)


# class ChaiCertificateAdmin(admin.ModelAdmin):
#     list_display = ("chai", "certificate_number", "issused_date", "valid_utill")
#     filter_horizontal = ("chai",)


# class chairer(admin.ModelAdmin):
#     list_display = ("chai", "frecency", "person", "date_added")
#     filter_horizontal = ("chai",)


# admin.site.register(ChaiVariety, ChaiCertificateAdmin)
# admin.site.register(ChaiCertificate, ChaiCertificateAdmin)
# admin.site.register(ChaiReview, ChaiReviewInline)
# admin.site.register(Store, StoreAdmin)
# admin.site.register(ChaiFrencency, chairer)


# from django.contrib import admin
# from .models import ChaiVariety, ChaiCertificate, ChaiFrequency, ChaiReview, Store


# class ChaiReviewInline(admin.TabularInline):
#     model = ChaiReview
#     extra = 2


# class ChaiVarietyAdmin(admin.ModelAdmin):
#     list_display = ("name", "type", "date_added")
#     inlines = [ChaiReviewInline]


# class StoreAdmin(admin.ModelAdmin):
#     list_display = ("name", "location", "city")
#     filter_horizontal = ("chaivarieties",)


# class ChaiCertificateAdmin(admin.ModelAdmin):
#     list_display = ("chai", "certificate_number", "issused_date", "valid_utill")
#     filter_horizontal = ("chai",)


# class ChaiFrequencyAdmin(admin.ModelAdmin):
#     list_display = ("chai", "frequency", "person", "date_added")
#     filter_horizontal = ("chai",)


# admin.site.register(ChaiVariety, ChaiVarietyAdmin)
# admin.site.register(ChaiCertificate, ChaiCertificateAdmin)
# admin.site.register(ChaiReview)
# admin.site.register(Store, StoreAdmin)
# admin.site.register(ChaiFrequency, ChaiFrequencyAdmin)


from django.contrib import admin
from .models import ChaiVariety, ChaiCertificate, ChaiReview, Store


class ChaiReviewInline(admin.TabularInline):
    model = ChaiReview
    extra = 2


class ChaiVarietyAdmin(admin.ModelAdmin):
    list_display = ("name", "type", "date_added")
    inlines = [ChaiReviewInline]


class StoreAdmin(admin.ModelAdmin):
    list_display = ("name", "location", "city")
    filter_horizontal = ("chaivarieties",)


class ChaiCertificateAdmin(admin.ModelAdmin):
    list_display = ("chai", "certificate_number", "issused_date", "valid_utill")


admin.site.register(ChaiVariety, ChaiVarietyAdmin)
admin.site.register(ChaiCertificate, ChaiCertificateAdmin)
admin.site.register(ChaiReview)
admin.site.register(Store, StoreAdmin)
