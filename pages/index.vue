<template>
  <!-- wrapper section -->
  <div class="wrapper landing-page">
    <div class="page-header page-header-small rellax-header shadow">
      <div class="page-header-image "
           style="background-image: url('https://picsum.photos/1440')">
      </div>
      <div class="content-center">
        <h1 class="title">See Something Say Something!</h1>

      </div>
    </div>
    <div class="features-4" style="margin-top: -70px;">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Report Section</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <card type="background" raised color="transparent" style="background-image: url('img/bg24.jpg')">
              <template slot="info">
                <div class="icon icon-white">
                  <i class="now-ui-icons business_bulb-63"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">Collaborate on ideas</h4>
                  <p>Your designer will come back to you with an initial set of ideas.</p>
                  <a href="/QuestionForm" class="ml-3">Find more...</a>
                </div>
              </template>
            </card>
          </div>
          <div class="col-md-4">
            <card type="background" raised color="transparent" style="background-image: url('img/bg23.jpg')">
              <template slot="info">
                <div class="icon icon-white">
                  <i class="now-ui-icons business_badge"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">Pick your designer</h4>
                  <p>Havenly interior designers are vetted professionals and real people.</p>
                  <a href="#pablo">Find more...</a>
                </div>
              </template>
            </card>
          </div>
          <div class="col-md-4">
            <card type="background" raised color="transparent" style="background-image: url('img/bg25.jpg')">
              <template slot="info">
                <div class="icon icon-white">
                  <i class="now-ui-icons location_map-big"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">Visualize your room</h4>
                  <p>Share a floor plan, and we'll create a visualization of your room.</p>
                  <a href="#pablo" class="ml-3">Find more...</a>
                </div>
              </template>
            </card>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Report Section</h2>
            <h5 class="description">According to the National Oceanic and Atmospheric Administration, Ted,
              Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs
              year down to low ice extent in the Pacific and a late drop in ice extent in the Barents
              Sea.</h5>
          </div>
        </div>
        <div class="separator separator-success"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <!-- First image on the left side -->
              <div class="image-container image-left" style="background-image: url('https://picsum.photos/500')">
                <p class="blockquote blockquote-primary">"Over the span of the satellite record, Arctic
                  sea ice has been declining significantly, while sea ice in the Antarctichas
                  increased very slightly"
                  <br>
                  <br>
                  <small>-NOAA</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div class="image-container image-left-bottom"
                   style="background-image: url('https://picsum.photos/400')"></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div class="image-container image-right"
                   style="background-image: url('https://picsum.photos/300')"></div>
              <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
              <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer,
                and that process will continue whatever happens with climate change. Even if the Arctic
                continues to be one of the fastest-warming regions of the world, it will always be
                plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of
                natural reasons, there’s huge variety of the state of the ice.
              </p>
              <p>
                For a start, it does not automatically follow that a record amount of ice will melt this
                summer. More important for determining the size of the annual thaw is the state of the
                weather as the midnight sun approaches and temperatures rise. But over the more than 30
                years of satellite records, scientists have observed a clear pattern of decline,
                decade-by-decade.
              </p>
              <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer,
                and that process will continue whatever happens with climate change. Even if the Arctic
                continues to be one of the fastest-warming regions of the world, it will always be
                plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of
                natural reasons, there’s huge variety of the state of the ice.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="team-3" >
      <div class="container">
        <div class="row">
          <div class="col-md-4 ml-auto mr-auto text-center">
            <rotating-card
                card-class="md-card-background"
                layer-background
                :front-card-image="cardRotating.cardRotatingBg1"
                :back-card-image="cardRotating.cardRotatingBg2">
              <template slot="frontRotateCardContent">
                <h6 class="card-category">Reporting Partner</h6>
                <a href="https://www.iwf.org.uk/">
                  <div class="hero-images-container border-0">
                    <img v-lazy="'img/iwf.png'" alt="" class="">
                  </div>
                  <br />
                  <h3 class="card-title">Internet Watch Foundation</h3>
                </a>

              </template>
              <template slot="backRotateCardContent">
                <h5 class="card-title mt-5">
                  The IWF Reporting Portal
                </h5>
                <p class="card-description">
                  Enables you to provide a reporting service for your citizens to report images and videos of child sexual abuse when they spot it on the internet without you having to set up a hotline.
                </p>

                <md-button href="https://report.iwf.org.uk/en" class="md-light text-white md-just-icon md-round pb-4">
                  <now-ui-icon>Learn More</now-ui-icon>
                </md-button>
              </template>
            </rotating-card>
          </div>
          <div class="col-md-4 ml-auto mr-auto text-center">
            <rotating-card
                card-class="md-card-background"
                layer-background
                :front-card-image="cardRotating.cardRotatingBg1"
                :back-card-image="cardRotating.cardRotatingBg1">
              <template slot="frontRotateCardContent">
                <h6 class="card-category">Full Background Card</h6>
                <a href="javascript:void(0)">
                  <h3 class="card-title">This Background Card Will Rotate on Hover</h3>
                </a>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="backRotateCardContent">
                <h5 class="card-title">
                  Manage Post
                </h5>
                <p class="card-description">As an Admin, you have shortcuts to edit, view or delete the posts.</p>

                <md-button href="javascript:void(0)" class="md-info md-just-icon md-round">
                  <now-ui-icon>subject</now-ui-icon>
                </md-button>
                <md-button href="javascript:void(0)" class="md-success md-just-icon md-round">
                  <now-ui-icon>edit</now-ui-icon>
                </md-button>
                <md-button href="javascript:void(0)" class="md-danger md-just-icon md-round">
                  <now-ui-icon>delete</now-ui-icon>
                </md-button>
              </template>
            </rotating-card>
          </div>
          <div class="col-md-4 ml-auto mr-auto text-center">
            <rotating-card
                card-class="md-card-background"
                layer-background
                :front-card-image="cardRotating.cardRotatingBg1"
                :back-card-image="cardRotating.cardRotatingBg1">
              <template slot="frontRotateCardContent">
                <h6 class="card-category">Full Background Card</h6>
                <a href="javascript:void(0)">
                  <h3 class="card-title">This Background Card Will Rotate on Hover</h3>
                </a>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="backRotateCardContent">
                <h5 class="card-title">
                  Manage Post
                </h5>
                <p class="card-description">As an Admin, you have shortcuts to edit, view or delete the posts.</p>

                <md-button href="javascript:void(0)" class="md-info md-just-icon md-round">
                  <now-ui-icon>subject</now-ui-icon>
                </md-button>
                <md-button href="javascript:void(0)" class="md-success md-just-icon md-round">
                  <now-ui-icon>edit</now-ui-icon>
                </md-button>
                <md-button href="javascript:void(0)" class="md-danger md-just-icon md-round">
                  <now-ui-icon>delete</now-ui-icon>
                </md-button>
              </template>
            </rotating-card>
          </div>
        </div>

      </div>
    </div>
    <div class="pricing-2">
      <div class="pricing-2" id="pricing-2">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto text-center">
              <h2 class="title">Pick the best plan for you</h2>
              <tabs pills type="success" centered>
                <tab-pane label="Legal Entity"></tab-pane>
                <tab-pane label="Individual"></tab-pane>
              </tabs>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <card type="pricing" plain>
                <h6 class="category">Enterprise</h6>
                <h1 class="card-title">
                  <small>$</small>
                  59
                </h1>
                <ul>
                  <li>
                    <b>10GB</b> Disk Space
                  </li>
                  <li>
                    <b>100GB</b> Monthly Bandwidth
                  </li>
                  <li>
                    <b>20</b> Email Accounts
                  </li>
                  <li>
                    <b>Unlimited</b> subdomains
                  </li>
                </ul>
                <n-button type="success" round>
                  Sign Up
                </n-button>
              </card>
            </div>
            <div class="col-md-4">
              <card type="pricing"
                    raised
                    class="card-background"
                    style="background-image: url('img/pricing2.jpg')">

                <h6 class="category text-info">Professional</h6>
                <h1 class="card-title">
                  <small>$</small>
                  29
                </h1>
                <ul>
                  <li>
                    <b>5GB</b> Disk Space
                  </li>
                  <li>
                    <b>50GB</b> Monthly Bandwidth
                  </li>
                  <li>
                    <b>10</b> Email Accounts
                  </li>
                  <li>
                    <b>Unlimited</b> subdomains
                  </li>
                </ul>
                <n-button class="btn-neutral" round>
                  Sign Up
                </n-button>

              </card>
            </div>
            <div class="col-md-4">
              <card type="pricing" plain>

                <h6 class="category">Standard</h6>
                <h1 class="card-title">
                  <small>$</small>
                  17
                </h1>
                <ul>
                  <li>
                    <b>2GB</b> Disk Space
                  </li>
                  <li>
                    <b>25GB</b> Monthly Bandwidth
                  </li>
                  <li>
                    <b>5</b> Email Accounts
                  </li>
                  <li>
                    <b>Unlimited</b> subdomains
                  </li>
                </ul>
                <a href="#pablo" class="btn btn-success btn-round">
                  Get Started
                </a>

              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your project is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
                class="input-lg"
                placeholder="First Name..."
                v-model="form.firstName"
                addon-left-icon="now-ui-icons users_circle-08">
            </fg-input>
            <fg-input
                class="input-lg"
                placeholder="Email Here..."
                v-model="form.email"
                addon-left-icon="now-ui-icons ui-1_email-85">
            </fg-input>
            <div class="textarea-container">
                            <textarea class="form-control"
                                      name="name" rows="4" cols="80"
                                      v-model="form.message"
                                      placeholder="Type a message..."></textarea>
            </div>
            <div class="send-button">
              <n-button type="success" round block size="lg">Send Message</n-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput, Tabs, TabPane, RotatingCard } from '@/components';
import initParallax from '@/utils/initParallax'

export default {
  name: 'landing-page',
  layout: 'gray-footer',
  components: {
    RotatingCard,
    Card,
    Tabs,
    TabPane,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      manualRotateState: false,
      manualRotateState2: false,
      manualRotateState3: false,

      cardRotating: {
        cardRotatingBg1: require('~/static/img/whitebg.jpeg'),
        cardRotatingBg2: require("~/static/img/whitebg.jpeg")
      },
      form: {
        firstName: '',
        email: '',
        message: '',

      }
    }
  },
  mounted() {
    initParallax()
  },

}
</script>
<style>
</style>
