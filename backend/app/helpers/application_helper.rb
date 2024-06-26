module ApplicationHelper
  def full_title(title='')
    base_title = 'Ruby on Rails Tutorial Sample App'
    if title.present?
      "#{title} | #{base_title}"
    else
      base_title
    end
  end
end
