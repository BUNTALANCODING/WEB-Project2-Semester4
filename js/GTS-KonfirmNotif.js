function notifkonf(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Apa Kamu Yakin?',
        text: "Konfirmasi Pembelian Produk",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Konfirmai',
        cancelButtonText: 'Cancel',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Succes!',
            'Terimakasih Selamat Belanja Kembali',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Cek Kembali Pesanan Anda',
            'error'
          )
        }
      })
}