import { toasts } from "svelte-toasts";

export function clipAndToast(txt) {
    navigator.clipboard.writeText(txt);

    toasts.add({ title: "Copied!", description: "", duration: 3000, type: "success" });
}