jQuery(document).ready(function($) {
  var ieScriptTag = [
    '<div id="old-browser-window">',
    '  <div class="old-browser-parent">',
    '    <div class="old-browser-overlay">',
    '    </div>',
    '    <div class="old-browser-holder">',
    '      <div class="old-browser-top">',
    '        <h1>Üzgünüm.</h1>',
    '        <h2>Kullanmakta olduğunu tarayıcı oldukça eski.</h2>',
    '        <h3>Sitemi"i tüm özellikleriyle gösterebilmek adına, seni daha modern tarayıcılar kullanmaya davet ediyorum.</h3>',
    '      </div>',
    '      <div class="old-browser-bottom">',
    '        <a href="http://www.google.com/chrome/" target="_blank">',
    '          <img src="data:image/png;base64,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" alt="" width="100" height="100">',
    '          <h4>Google Chrome</h4>',
    '        </a>',
    '        <a href="http://www.mozilla.org/firefox/" target="_blank">',
    '          <img src="data:image/png;base64,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" alt="" width="101" height="100">',
    '          <h4>Mozilla Firefox</h4>',
    '        </a>',
    '        <a href="http://support.apple.com/kb/dl1531" target="_blank">',
    '          <img src="data:image/png;base64,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" alt="" width="92" height="100">',
    '          <h4>Safari</h4>',
    '        </a>',
    '        <a href="http://www.opera.com/download" target="_blank">',
    '          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABkBAMAAAAS3/GoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAANhIOdhIOdhIOdhIOdhIOdhIOdhIOdhIOUEJC/UAAAAIdFJOUwB8FTPGU6LpUY4cBAAAAsRJREFUWMPtWEtTE0EQnuy4eE20CDkuEoLHhULhKA+RY7QQPWI0mCvGVOUas8nOzzasIfR7s+XBi33cma+n++ue7tl2jku0+76xkI8Hbh2JdpuXYSk/N1+U7t9pBijZ86RE/WUgcmcZFr0eBybzD8b+IEmmIuT9C0RX3r89VgBhnkr740FQ5a0E2IJGfGk0vkHEM8EgxP7ig782jYqAQfkfWqIrgDijgENh0Q90pjyIcLY6vgO0jPQDho92AjU5OgKuBODfkebFBliYwNhA6mDetsDCD4W7cCMrCsjWY/noQ+1kxBNwe6C4QM7uiV+nTqVvpastquF05KnwMZAUgF4/8OTRxU/1FHgwt4YuFykr0iJyYULvYeBOfIbfZhYg1Fn4CavUwSJtPNJxZtzE5fnILRoGwnnhdZtbqQLyhIaGAxAlRVhbwQg0BdxQrzgAhfqepmgcpPxSAFPKasYAmJMZZZUDOriO44LBc4+uZ849oRqcka4hJG6vKuBlNUCXBHoNAI7kpAxQLwXEFNAqA+De+uY/4B8BAgH8ZWrMywGVs7XyfXha9cbhO50lNiAvLzOsasSVAAvao2CXyg6tfKjXk2cUr62/yEOjtHqfsgbAGsontrxXpQOlzCu7KRZhis22iwFFMuMWNDT79JDroE8HzHqPPU7ZDfJjTvqG1YJiITW9lRs1wV7sV9dooqfCC5tG7lhSVpO0CIFe+YceUTOd1ZkYTUyTl63tqO/Qbfk2Ipt6ms8jxbWplkl1JTyw0ni1ZCma2irfbZE9aBEpQNDtXPyPGxrFYZTwP0VWfxCzX/m/6MhZ9SfvHzi3c21WRJLkF7e378zaQLKA/eOL040rdX9eF4cIXh0K9JUxBR+bLIcn6rhFHlTcpfqsZV9ATFJrmsOtOklLxkVbmJ9+UjqQ2v/+uP1kvSHWq+b5wpfsYlPa/htkQkVZs+C/lgAAAABJRU5ErkJggg==" alt="" width="95" height="100">',
    '          <h4>Opera</h4>',
    '        </a>',
    '        <a href="http://www.microsoft.com/download/internet-explorer.aspx" target="_blank">',
    '          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABkBAMAAACGOVhaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURQAAAFPL8mHP8yG871PL8jzE8UTH8TTC8Cu/7x677hm67qCVAWEAAAAJdFJOUwAgPexemn2x0FDaINgAAAQ1SURBVFjDlVg7U9tAEJaEbSiNGQik4pVhoMIJE5Ar4ziZxBXPSXBlJrxCBSGBjCtiCDPQJcbAXWnjx+lXRo87ae90kqWtGInPu/vt7nd7UpRolilubxWUOJbZv0IIPf1IR0ZohzpBluHlyWgI9f2tgajhRiSQtukiLLuPAEncEurCwAQThPN9IXM5+vvG8l5h+sMZCXWkFbcvLj6zPFpbNmXqMakHcpc50g0zDxZXb5eFmsOVAB9fKLnUAFvj5DI8b2ZL4OdIUwYZu0OC4WsvibtnCWQUI58Zb13QQtsPSelIYtgNb6DrT7+KpGas038Y9GO+ETkGEdoASR/mRRAEIZpHSsxHuw2EIPzbwXQETAmFWMuubFLgOkHCMPi1zYFQ008I9XU0sBjDjenon/lPL0+iZ2M7MruhxPW1ZnfAw7tw6qrcoI5Yj3vTeoijrqK+4WbO7pq1kdCMKhrXBimTAVzTPDeGqRiGAGqmmmJoXWXGRTxtFTKzhzmey97IpRBavaKy5iE3aZm84bu8EFpWGWdeTt0XHzlPPehmwNTwtErHGtfAmzLhmOMKik+UJH3dhYQmoD5AeVN11KF0m8Zr2DhwhE9gOqbYpehLYURU6Oiv93wIPZiaQn9rTRgr6AiM6THKK5osT0cIQXBeQlVz/Eboq6xPWaqwfdyQc2at7gJCo+0rkpAw3TCikf+0SIHg3CgGK97IdSVnKhgQV0PGQKIy4S9LOiFtsU1tUYIpyTvhWFJp1xZAVSf9oiOhTVHmZWR7dEoPTDjxJ5IsN6b9BsWoJqtAH1uSOe9j95KO6mcPEaVahokRGmrED41h4oTGMINxMI8RTx6/H1WPg3F4S5L4mIk4ENo7Ze7Z7nC4pSXp5KOs0DzTQQtn4BAGzXaYSlp2GeVCIFSnGWW9J9JFLdSGBEw9wi3HajYckziLgh7ICftJSG17ZpXPPqmykLuOPxTDszxtUFyB0+C740Bm7WwH7T84IrIhjdJm8tHhCa/ztza1Kv5eySkjd7F4HVyMCh0EiyluvDlHmn8P0Z2k+co+eiB1h4icWkeiBRY6qMGaQf3KvciybmtLursx5VzsNvnhyjMem872wo8RWTk/2D8Ter6jsH9dDNBSw/coy9SdNlg5gubkmU7RaY4gwM+uGNDmV3P9IOxIP/Z6cqafI7Zylr0tQesj264ilcBmMR/uqAfFjdVcC80Iuzv3BNxgxsMcteFWgielG24AaU5VgNCMBWNq3NoIFTqQb7jaq7w4qTsBV7mKIG/wmjojhdR3xRUQjPIcacl4OBXkmt1wLXuFW+u+Txuo9V2y2JMNdqlqmUGoR9ynCvy4KtV447wwbV7ebIjlTvc+UZEbyTeqhNUxhj2WyyxVbf+Xjq2nKz9XpQfDKG0zcg1PnuHZYrE4FXiajF2Zha3/WY31HU8tHuxFR/wHUjhV2tkjo1wAAAAASUVORK5CYII=" alt="" width="102" height="100">',
    '          <h4>Internet Explorer</h4>',
    '        </a>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</div>',
    '<style type="text/css">',
    '  h1, h2, h3, h4, h5, p {',
    '    text-align: center;',
    '    font-family: sans-serif;',
    '    font-weight: 300;',
    '  }',
    '  h4 {',
    '    margin-top: 5px;',
    '  }',
    '  #old-browser-window {',
    '    display: block;',
    '    z-index: 9999900;',
    '    position: fixed;',
    '    top: 0;',
    '    left: 0;',
    '    width: 100%;',
    '    height: 100%;',
    '  }',
    '  .old-browser-parent {',
    '    display: block;',
    '    position: relative;',
    '    width: 100%;',
    '    height: 100%;',
    '  }',
    '  .old-browser-overlay {',
    '    display: block;',
    '    z-index: -1;',
    '    position: absolute;',
    '    top: 0;',
    '    left: 0;',
    '    width: 100%;',
    '    height: 100%;',
    '    opacity: 0.9;',
    '    background-color: #000;',
    '    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";',
    '  }',
    '  .old-browser-top {',
    '    z-index: 9999902;',
    '  }',
    '  .old-browser-bottom {',
    '    z-index: 9999903;',
    '  }',
    '  .old-browser-holder {',
    '    position: absolute;',
    '    top: 50%;',
    '    left: 50%;',
    '    width: 650px;',
    '    height: 400px;',
    '    margin-top: -200px;',
    '    margin-left: -325px;',
    '    padding: 10px;',
    '    background-color: #FFF;',
    '  }',
    '  .old-browser-bottom a {',
    '    display: block;',
    '    float: left;',
    '    margin: 10px 6px;',
    '    text-align: center;',
    '    text-decoration: none;',
    '    outline: 0;',
    '    color: #000;',
    '  }',
    '  .old-browser-bottom a:hover h4 {',
    '    text-decoration: underline;',
    '  }',
    '  .old-browser-bottom a img {',
    '    margin: 0 auto;',
    '    border: 0;',
    '  }  ',
    '</style>'
  ].join();
  $("body").append(ieScriptTag);
});