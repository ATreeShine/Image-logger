import logging
from PIL import Image

class ImageLogger(logging.Logger):
    def makeRecord(self, name, level, fn, lno, msg, args, exc_info, func=None, extra=None):
        if isinstance(msg, Image.Image):
            msg.save(f'{name}.png')
        return super().makeRecord(name, level, fn, lno, msg, args, exc_info, func=None, extra=None)

logging.setLoggerClass(ImageLogger)
logger = logging.getLogger('image_logger')

# Test the logger with an image
img = Image.new('RGB', (60, 30), color = 'red')
logger.warning(img)
