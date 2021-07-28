let config = {
  address: "0.0.0.0",
  port: 8080,
  basePath: "/",
  ipWhitelist: [],
  useHttps: false,
  httpsPrivateKey: "",
  httpsCertificate: "",
  language: "en",
  locale: "en-US",
  logLevel: ["INFO", "LOG", "WARN", "ERROR"],
  timeFormat: 24,
  units: "metric",
  
  modules: [
    {
      module: "alert",
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "calendar",
      header: "Calendar",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-check",
            url: "{GCAL}"
          }
        ]
      }
    },
    {
      module: "weather",
      position: "top_left",
      config: {
        weatherProvider: "openweathermap",
        type: "current",
        location: "Sydney",
        locationID: "2147714",
        apiKey: "{APIKEY}"
      }
    },
    {
      module: "weather",
      position: "top_left",
      header: "Weather Forecast",
      config: {
        weatherProvider: "openweathermap",
        type: "forecast",
        location: "Sydney",
        locationID: "2147714",
        apiKey: "{APIKEY}"
      }
    },
    {
      module: "MMM-Worldclock",
      position: "top_right",
      config: {
        timeFormat: "hh:mm A",
        style: "left",
        offsetTimezone: null,
        clocks: [
          {
            title: "Honolulu",
            timezone: "Pacific/Honolulu",
            flag: "us",
          },
          {
            title: "Kathmandu",
            timezone: "Asia/Kathmandu",
            flag: "np",
          }
        ]
      }
    },
    {
      module: "MMM-homeassistant-sensors",
      position: "top_right",
      config: {
        host: "192.168.86.5",
        port: "8123",
        https: false,
        token: "{HATOKEN}",
        prettyName: false,
        stripName: false,
        debuglogging: true,
        values: [
          {
            sensor: "binary_sensor.porch_motion_sensor_motion",
            name: "Porch",
            icons: [
              {
                default: "motion-sensor"
              }
            ]
          },
          {
            sensor: "cover.garage_door",
            name: "Garage",
            icons: [
              {
                default: "garage"
              }
            ]
          },
          {
            sensor: "sensor.master_bedroom_mp_sensor_temperature_measurement",
            name: "Master Bedroom",
            icons: [
              {
                "default": "thermometer"
              }
            ]
          },
          {
            sensor: "sensor.kids_bedroom_mp_sensor_temperature_measurement",
            name: "Kids Bedroom",
            icons: [
              {
                "default": "thermometer"
              }
            ]
          },
          {
            sensor: "sensor.guest_bedroom_mp_sensor_temperature_measurement",
            name: "Guest Bedroom",
            icons: [
              {
                "default": "thermometer"
              }
            ]
          },
          {
            sensor: "sensor.media_room_mp_sensor_temperature_measurement",
            name: "Media Room",
            icons: [
              {
                "default": "thermometer"
              }
            ]
          }
        ]
      }
    },
    {
      module: "newsfeed",
      position: "bottom_center",
      config: {
        feeds: [
          {
            title: "Sydney Morning Herald",
            url: "https://www.smh.com.au/rss/feed.xml"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      }
    },
    {
      module: "MMM-EasyBack",
      position: "fullscreen_below",
      config: {
        bgName: "bg.jpg",
        videoName: "",
        youTubeID: "",
        height: "2160px",
        width: "3840px"
      }
    },
    {
      module: "MMM-WiFiPassword",
      position: "bottom_right",
      config: {
        network: "{SSID}",
        password: "{PASSWORD}", 
        qrSize: 150,
        header: 'WiFi',
        showNetwork: false,
        showPassword: false,
        showAuthType: false,
      }
    }
  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}