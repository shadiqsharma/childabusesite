<template>
    <navbar position="fixed"
            :transparent="transparent"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto">
        <template slot-scope="{toggle, isToggled}">
          <nuxt-link to="/landing">
          <img src="~static/img/ChildAbuseHelpLogo.png" alt="ChildAbuseHelpLogo" style="height:40px;">
          </nuxt-link>
          <el-popover
                        ref="popover1"
                        popper-class="popover"
                        placement="bottom"
                        width="300"
                        trigger="hover">
                    <div class="popover-body">ChildAbuseSigns and ChildAbuseHelp Report & Resources site</div>
                </el-popover>
        </template>
        <template slot="navbar-menu">
            <drop-down tag="li" title="NavLinks" icon="now-ui-icons design_app" class="nav-item">
              <nav-link to="/landing">
                <i class="now-ui-icons design_image"></i> Presentation
              </nav-link>
                <nav-link to="/Blog-post">
                    <i class="now-ui-icons business_chart-pie-36"></i> Blog
                </nav-link>
              <nav-link to="/login">
                <i class="now-ui-icons business_chart-pie-36"></i> Login
              </nav-link>
            </drop-down>



            <li class="nav-item">

            </li>

        </template>
    </navbar>
</template>

<script>
import {DropDown, Navbar, NavbarToggleButton, NavLink} from '@/components';
import {Popover} from 'element-ui'

export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number,
    },
    components: {
      DropDown,
      Navbar,
      NavbarToggleButton,
      NavLink,
      [Popover.name]: Popover
    }
  }
</script>

<style scoped>

</style>
