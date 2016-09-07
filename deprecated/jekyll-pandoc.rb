require 'jekyll'
require 'pandoc-ruby' # add pandoc-ruby to your Gemfile
 
# Plugin for using pandoc as Jekyll markdown processor
# http://jekyllrb.com/docs/extras/ q.v.
# install in jekyll _plugins/ folder
# or Octopress plugins/
 
# In _config.yml, specify
# markdown: Pandoc # capital P
# pandoc:
# flags: [ <array of flags> ]
# options:
# <hash of options>
 
class Jekyll::Converters::Markdown::Pandoc
def initialize(config)
@flags = config["pandoc"]["flags"]
@keyvals = config["pandoc"]["options"]
end
 
def convert(content)
# possibly :to => :html5 would be better?
PandocRuby.convert(content, {:from => :markdown, :to => :html},
*@flags,*@keyvals)
end
end