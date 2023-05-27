import { useToast } from "@chakra-ui/react";

export default function RefreshBtn() {
  const toast = useToast({
    position: "top-10",
    title: "Stream is updated",
    containerStyle: {
      width: "800px",
      maxWidth: "100%",
    },
  });
  // Or via trigger
  // Style here will overwrite the entire style above
  return (
    <div className="flex justify-center mx-auto">
      <button
        className="bg-red-700 text-white justify-self-center m-2.5 font-sans font-bold mx-auto p-2 rounded-xl h-fit w-fit"
        onClick={async () => {
          toast({
            containerStyle: {},
          });
          window.location.reload();
        }}
      >
        REFRESH
      </button>
    </div>
  );
}
