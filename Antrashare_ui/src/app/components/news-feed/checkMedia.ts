import { AbstractControl, ValidationErrors } from "@angular/forms";

export function validVideoUrl (control: AbstractControl): ValidationErrors | null {
        var videoRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;

        var videoMatch = control.value.match(videoRegex);
        if (videoMatch && videoMatch[2].length === 11) {
            return null;
        }
        else {
            return { validVideoUrl: false };
        }
    }
