class Item < ActiveRecord::Base

  validates :name, presence: true

  aws_keys = if ['development', 'test'].include?(Rails.env)
    "#{Rails.root}/config/aws-keys.yml"
  else
    {
      bucket: ENV['S3_BUCKET_NAME'],
      access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      secret_access_key: ENV['AWS_SECRET_ACCESS_KEY']
    }
  end
  has_attached_file :image,
   :styles => { :medium => "300x300>", :thumb => "100x100>" },
   :default_url => "/images/:style/missing.png",
   storage: :s3,
   s3_credentials: aws_keys,
   s3_permissions: 'authenticated-read',
   path: "items/:basename.:extension",
   s3_server_side_encryption: :aes256
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  def s3_url(style=nil, expires_in=30.minutes)
    image.s3_object(style).url_for(:read, secure: true, expires: expires_in).to_s
  end

end

