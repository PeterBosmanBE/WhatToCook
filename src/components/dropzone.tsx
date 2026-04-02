import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function Dropzone({children}: {children?: React.ReactNode}) {
	const onDrop = useCallback(() => {
		// Do something with the files
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? <p>Drop the files here ...</p> : <>{children}</>}
		</div>
	);
}