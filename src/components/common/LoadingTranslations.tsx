import React from 'react';

const LoadingTranslations: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-sm text-muted-foreground animate-pulse">
          Loading translations...
        </p>
      </div>
    </div>
  );
};

export default LoadingTranslations;

// HOC to handle translation loading states
export const withTranslationLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithTranslationLoadingComponent(
    props: P & { isLoading?: boolean }
  ) {
    const { isLoading, ...rest } = props;

    if (isLoading) {
      return <LoadingTranslations />;
    }

    return <WrappedComponent {...(rest as P)} />;
  };
};