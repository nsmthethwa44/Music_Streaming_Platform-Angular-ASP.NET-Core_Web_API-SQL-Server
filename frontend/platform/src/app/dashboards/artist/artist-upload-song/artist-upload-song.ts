import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SongService } from '../../../services/song-service/song-service';  
import Swal from 'sweetalert2';

@Component({
  selector: 'app-artist-upload-song',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './artist-upload-song.html',
  styleUrl: './artist-upload-song.scss',
})
export class ArtistUploadSong {
@Input() isVisible = false;
selectedAudioFile: File | null = null;
selectedCoverImage: File | null = null;
songForm: FormGroup;  
@Output() fileUploadedSuccessFully = new EventEmitter<void>();

constructor(private fb: FormBuilder, private songSvc: SongService) {
  this.songForm = this.fb.group({
  title: ['', Validators.required],
  albumTitle: ['', Validators.required],
  genre: ['', Validators.required]
});
}

closeUploadSong(){
  this.isVisible = false;
}

uploadSong(): void {
  if (this.songForm.invalid || !this.selectedAudioFile) {
    this.songForm.markAllAsTouched();

      Swal.fire({
      icon: 'warning',
      title: 'Incomplete Form',
      text: 'Please enter all required song details and select an audio file.',
      confirmButtonText: 'Okay'
    });

    return;
  }

  const formValue = this.songForm.getRawValue();
  
  // Show loading alert
  Swal.fire({
    title: 'Uploading Song...',
    text: 'Please wait while your song is being uploaded.',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  this.songSvc.uploadSong(formValue.title!, formValue.albumTitle!, formValue.genre!, this.selectedAudioFile, this.selectedCoverImage).subscribe({
      next: (song) => {
         Swal.fire({
          icon: 'success',
          title: 'Song Published!',
          text: `${song.title} has been uploaded successfully.`,
          confirmButtonText: 'Done'
        })
        this.closeUploadSong();
        this.fileUploadedSuccessFully.emit();
      },
      error: (error) => {
      Swal.fire({
          icon: 'error',
          title: 'Upload Failed',
          text: error?.error?.message || 'Something went wrong while uploading your song.',
          confirmButtonText: 'Try Again'
        });
      }
    });
}

// upload music file 
onAudioSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedAudioFile = input.files[0];
  }
}

// upload cover image
onCoverSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedCoverImage = input.files[0];
  }
}



}
