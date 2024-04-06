<?php
$targetDirectory = 'DATA/';
$targetFile = $targetDirectory . basename($_FILES['pdfFile']['name']);
$uploadOk = 1;
$fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

// Check if file already exists
if (file_exists($targetFile)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}

// Check file size
if ($_FILES['pdfFile']['size'] > 5000000) { // Adjust the maximum file size if needed
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}

// Allow only PDF files
if ($fileType != 'pdf') {
    echo "Sorry, only PDF files are allowed.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// If everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES['pdfFile']['tmp_name'], $targetFile)) {
        echo "The file " . basename($_FILES['pdfFile']['name']) . " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>