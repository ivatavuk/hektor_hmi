#!/usr/bin/python3
import os
import http.server

os.chdir('../webpage')

class StoppableHTTPServer(http.server.HTTPServer):
  def run(self):
      try:
          self.serve_forever()
      except KeyboardInterrupt:
          pass
      finally:
          # Clean-up server (close socket, etc.)
          self.server_close()

server_object = StoppableHTTPServer(server_address=('', 8000), RequestHandlerClass=http.server.CGIHTTPRequestHandler)
server_object.run()
