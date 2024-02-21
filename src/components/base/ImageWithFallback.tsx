import Image from "next/image";
import { useEffect, useState } from "react";

import { defaultImage } from "@/config";

interface ImageWithFallbackProps extends React.ComponentProps<typeof Image> {
  fallback?: string;
}

const ImageWithFallback = ({
  className,
  fallback = defaultImage,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <Image
      className={className}
      alt={alt}
      onError={handleError}
      src={error ? fallback : src}
      {...props}
    />
  );
};

export default ImageWithFallback;
