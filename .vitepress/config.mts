import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "BHIVE",
  description: "Co-Working and Managed Office",

  ignoreDeadLinks: true,
  lastUpdated: false,
  cleanUrls: true,

  srcExclude: [ 'README.md' ],

  themeConfig: {
    search: { provider: 'local' },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Meetings', link: '/meetings' }
    ],

    sidebar: [
      {
        text: 'Meetings',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/meetings' },
          { text: 'Flow - Master', link: '/meetings/flow-00' },
          { text: 'Actors', link: '/meetings/actors' },
          
          { text: 'App', link: '/meetings/app' },

          { text: 'Infinity', link: '/meetings/infinity' },
          { text: 'User Details', link: '/meetings/user-details' },

          { text: 'Booking - Listings', link: '/meetings/booking-listings' },
          { text: 'Booking - Add/Edit', link: '/meetings/booking-add-edit' },
          { text: 'Booking - Calendar', link: '/meetings/booking-calendar' },
          { text: 'Booking - Cancel', link: '/meetings/booking-cancel' },

          { text: 'Rooms - Listings', link: '/meetings/rooms-listings' },
          { text: 'Rooms - Add', link: '/meetings/rooms-add' },
          { text: 'Rooms - Edit', link: '/meetings/rooms-edit' },
          { text: 'Rooms - Edit-Disable', link: '/meetings/rooms-edit-disable' },
          
        ]
      },
      {
        text: 'Spaces',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/spaces' },
        ]
      }
    ]
  }
})
