from django.shortcuts import render, render_to_response
from django.template import RequestContext
from landingPageApp.models import images, cart
from django.core.context_processors import request

def landingPage(request):
    return render(request,"landing-page1.html")

def wardrobes(request):
    # image = cart(_id=1,number = '0')
    #
    # image.save()
    images_info=images.objects.all()[:4]
    image_data={
        "image_details":images_info
    }
    # if request.method=='POST':
    #        request.session['value']=request.POST.get('value')
    # cart_info=cart.objects.all()
    # cart_data={
    #     "cart_details":cart_info
    # }
    print image_data
    # print request.session['value']
    # print cart_data
    # rc = RequestContext(request, {'image_data':image_data, 'cart_data':cart_data})
    return render_to_response("wardrobes.html",image_data,context_instance=RequestContext(request))
def sofa(request):
    # cart_info=cart.objects.all()
    # cart_data={
    #     "cart_details":cart_info
    # }
    images_info=images.objects.all()[8:]
    image_data={
        "image_details":images_info
    }
    print image_data
    # print cart_data
    # rc = RequestContext(request, {'image_data':image_data,'cart_data':cart_data})
    return render_to_response("sofa.html",image_data,context_instance=RequestContext(request))

def kitchen(request):
    # cart_info=cart.objects.all()
    # cart_data={
    #     "cart_details":cart_info
    # }
    images_info=images.objects.all()[4:8]
    image_data={
        "image_details":images_info
    }
    print image_data
    # print cart_data
    # rc = RequestContext(request, {'image_data':image_data, 'cart_data':cart_data})
    return render_to_response("kitchen.html",image_data,context_instance=RequestContext(request))
# Create your views here.
