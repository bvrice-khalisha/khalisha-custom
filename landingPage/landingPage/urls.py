from django.conf.urls import patterns, include, url
from django.contrib import admin
from landingPageApp.views import landingPage
from landingPageApp.views import wardrobes
from landingPageApp.views import sofa
from landingPageApp.views import kitchen

urlpatterns = patterns('',
    # Examples:
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'landingPageApp.views.landingPage', name=''),
    # url(r'^blog/', include('blog.urls')),
    #     url('',landingPage),
    # url(r'^wardrobe$', 'landingPageApp.views.wardrobes', name='wardrobe'),
        url('landingPage',landingPage),
        url('wardrobe',wardrobes),
        url('sofa',sofa),
        url('kitchen',kitchen)

)
